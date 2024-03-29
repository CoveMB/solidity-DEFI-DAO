import React, { useContext, useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import styled from "styled-components";
import { Web3Context } from "../../../../contracts/context";
import { gradientBackgroundCss } from "../../../../style/card";
import { borderRadius } from "../../../../style/characteristics";
import { inputLike } from "../../../../style/input-like";
import { Button } from "../../../../style/tags/button";
import { ifMountedSetDataStateWith } from "../../../../utils/state-update";
import { Web3Guard } from "../../../shared/Web3Guards/Web3Guard/Web3Guard";

const DaoExplanation = styled.div`
  justify-self: start;
  text-align: justify;
  width: 100%;
  font-size: 0.75em;
  margin: 40px 0;
`

const DaoInfoTitle = styled.div`
  width: 100%;
  margin: auto;
  font-size: 0.75em;
  text-align: left;
  font-weight: bold;
  margin-bottom: 15px;
`

const DaoInfo = styled.div`
  width: 100%;
  font-size: 0.75em;
  text-align: left;
  margin-bottom: 40px;
`

const NewProposalCardDiv = styled.div`
  margin: 0 auto;
  padding: 40px;
  border-radius: ${borderRadius};
  box-shadow: 11px 16px 8px rgba(0, 0, 0, 0.4);
  ${gradientBackgroundCss}
`

const NewProposalTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-overflow: ellipsis;
  margin-bottom: 40px;
`

const ProposalElements = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`
const ProposalColorPickerDiv = styled.div`
  margin: 0 auto 40px auto;
  min-width: 40%;
`

const ProposalDescriptionDiv = styled.div`
  flex-grow: 1;
  min-height: 100%;
  margin: 0 auto 40px auto;
  min-width: 40%;
`

const ProposalDescriptionInput = styled.textarea`
  ${inputLike}
  width:100%;
  height:100%;
  min-height: 246px;
  border-radius: ${borderRadius};
`

const ProposalButtonDiv = styled.div`
  width: 100%;
`

export function NewProposal() {
  const { submitNewColorProposalToDao, canParticipateToDao, contracts: {governanceOrchestrator, governanceTimeLock} } = useContext(Web3Context);

  const [proposedColor, setProposedColor] = React.useState('#ffffff');
  const [daoSettings, setDaoSettings] = useState({votingDelay: "0", votingPeriod: "0", executionDelay: "0"})

  const [proposalDescription, setProposalDescription] = React.useState('');

  const submitProposal = async () => {
    await submitNewColorProposalToDao({color: proposedColor, description: proposalDescription})
    setProposalDescription("")
  }

  useEffect(() => {
    if(governanceOrchestrator && 
      governanceTimeLock) ifMountedSetDataStateWith(async () => ({
      votingDelay:await governanceOrchestrator.methods.votingDelay().call(),
      votingPeriod: await governanceOrchestrator.methods.votingPeriod().call(),
      executionDelay: await governanceTimeLock.methods.getMinDelay().call()
    }) ,setDaoSettings)
  }, [governanceOrchestrator, governanceTimeLock])
  

  return (
    <NewProposalCardDiv>
      <NewProposalTitle>
        Propose a new Astro Light color
      </NewProposalTitle>
      <DaoExplanation>ⓘ A <strong>DAO or Decentralized Autonomous Organization</strong> is an organizations where decisions are voted and taken as a community instead of central authority. <strong>Anyone can propose</strong> a change to be made usually thought calling a specific function of a <strong>smart contract managed by the DAO</strong>. Then any one that have a voting power can review the proposal and vote in favor or against it. Here voting power is calculated thought possession of the Astro Light <strong>ERC20 token</strong>, it could also have been through an NFT or other mechanism. Once a proposal has been voted <strong>anyone</strong> can execute it.</DaoExplanation>

      <Web3Guard displayButton>

        <DaoInfoTitle>DAO settings</DaoInfoTitle>
        <DaoInfo>
        Vote delay: {daoSettings.votingDelay} blocks
          <br/>
        Vote period: {daoSettings.votingPeriod} blocks
          <br/>
        Execution delay: {daoSettings.executionDelay} seconds
        </DaoInfo>

        <ProposalElements>
          <ProposalColorPickerDiv>
            {/* Styling of color picker in index.css */}
            <ChromePicker
              color={proposedColor}
              onChange={(color: {hex: string}) => setProposedColor(color.hex)}/>
          </ProposalColorPickerDiv>
          <div style={{ minWidth: "5%"}}></div>
          <ProposalDescriptionDiv>
            <ProposalDescriptionInput 
              placeholder="Describe why you want to make this change to the DAO.." 
              spellCheck={true}
              onChange= {({target: {value}}) => setProposalDescription(value)}
              value={proposalDescription}
            />
          </ProposalDescriptionDiv>
          <ProposalButtonDiv>
            {
              canParticipateToDao 
                ?
                <Button 
                  style={{width: "100%", whiteSpace: "normal"}}
                  onClick={submitProposal}>
                  Emit Proposal 📡
                </Button> :
                <Button 
                  style={{width: "100%", whiteSpace: "normal"}}
                  disabled
                >
                Hold ASTRO to make a proposal
                </Button>
            }
          </ProposalButtonDiv>
        </ProposalElements>
      </Web3Guard>
    </NewProposalCardDiv>
  );
}