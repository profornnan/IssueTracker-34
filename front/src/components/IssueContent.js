import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ClosedSvg from '../svgs/ClosedSvg';
import OpenedSvg from '../svgs/OpenedSvg';
import IssueInfo from './IssueInfo';
import IssueLabel from './IssueLabel';
import { IssueContext } from './IssueList';

const OutDiv = styled.div`
  display: flex;
  border-top: 1px solid #e1e4e8;
`;

const CheckBoxDiv = styled.div`
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const IconDiv = styled.div`
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const TitleDiv = styled.div`
  box-sizing: border-box;
  padding: 8px;
`;

const IssueTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  vertical-align: middle;
  color: #24292e;
`;

const LabelsContaier = styled.span`
  display: inline;
  line-height: 1.5;
`;

const IssueDataDiv = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #586069;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const IssueContent = ({ data }) => {
  const { issueListDispatch } = useContext(IssueContext);

  const issueLabels = data.labels.map((labelData, index) => {
    return (
      <IssueLabel
        key={`issueLabel${labelData.id}-${index}`}
        name={labelData.name}
        color={labelData.color}
      />
    );
  });

  return (
    <OutDiv>
      <CheckBoxDiv>
        <input
          type="checkbox"
          name={`issue${data.id}`}
          value={data.id}
          checked={data.isChecked}
          onChange={(e) =>
            issueListDispatch({
              type: 'check',
              payload: { id: Number(e.target.value) },
            })
          }
        />
      </CheckBoxDiv>
      <IconDiv>
        {data.status_open_closed ? (
          <OpenedSvg color={'#28a745'} />
        ) : (
          <ClosedSvg color={'#cb2431'} />
        )}
      </IconDiv>
      <TitleDiv>
        <StyledLink to={`/issue/${data.id}`}>
          <IssueTitle>{data.title}</IssueTitle>
        </StyledLink>
        <LabelsContaier>{issueLabels}</LabelsContaier>
        <IssueDataDiv>
          <IssueInfo
            issueId={data.id}
            makeDate={data.date}
            author={data.user.name}
          />
        </IssueDataDiv>
      </TitleDiv>
    </OutDiv>
  );
};

export default IssueContent;
