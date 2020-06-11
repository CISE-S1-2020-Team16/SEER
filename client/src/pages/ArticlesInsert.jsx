
import React, { Component } from "react";
import api from "../api";
import AsyncSelect from 'react-select/async';
import { sourceTypeoptions, researchParicipantoptions, researchmethod, researchOutcomeoptions, seMethodologiesoptions, seMethodoptions } from './DropdownData';

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  padding: 4px 11px;
  width: 55vw;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  outline: none;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;






class ArticlesInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: "",
      author: "",
      title: "",
      journal: "",
      year: "",
      volume: "",
      number: "",
      pages: "",
      month: "",
      sourcetype: "",
      credibilityrating: "",
      confidencerating: "",
      requestion: "",
      metric: "",
      researchparticipants: "",
      researchmethod: "",
      outcome: "",
      semethodologies: "",
      semethod: "",
      statustype: "",
      
    };
  }

  
  handleChangeInputStatusType = async (event) => {
    const statustype = event.target.value;
    this.setState({ statustype });
  };
  handleChangeInputSEMethod = async (event) => {
    const semethod = event.target.value;
    this.setState({ semethod });
  };
  handleChangeInputSEMethodologies = async (event) => {
    const semethodologies = event.target.value;
    this.setState({ semethodologies });
  };
  handleChangeInputResearchOutcome = async (event) => {
    const outcome = event.target.value;
    this.setState({ outcome });
  };
  handleChangeInputResearchMethod = async (event) => {
    const researchmethod = event.target.value;
    this.setState({ researchmethod });
  };
  handleChangeInputResearchParticipants = async (event) => {
    const researchparticipants = event.target.value;
    this.setState({ researchparticipants });
  };
  handleChangeInputMetric = async (event) => {
    const metric = event.target.value;
    this.setState({ metric });
  };
  handleChangeInputResearchQuestion = async (event) => {
    const requestion = event.target.value;
    this.setState({ requestion });
  };
  handleChangeInputSourceType =async (event) => {
    const sourcetype = event.target.value;
    this.setState({ sourcetype });
  };
  handleChangeInputCredibilityRating = async (event) => {
    const credibilityrating = event.target.value;
    this.setState({ credibilityrating });
  };
  handleChangeInputConfidenceRating = async (event) => {
    const confidencerating = event.target.value;
    this.setState({ confidencerating });
  };
  handleChangeInputArticle = async (event) => {
    const article = event.target.value;
    this.setState({ article });
  };

  handleChangeInputAuthor = async (event) => {
    const author = event.target.value;
    this.setState({ author });
  };

  handleChangeInputTitle = async (event) => {
    const title = event.target.value;
    this.setState({ title });
  };
  handleChangeInputJournal = async (event) => {
    const journal = event.target.value;
    this.setState({ journal });
  };

  handleChangeInputYear = async (event) => {
    const year = event.target.value;
    this.setState({ year });
  };
  handleChangeInputVolume = async (event) => {
    const volume = event.target.value;
    this.setState({ volume });
  };
  handleChangeInputNumber = async (event) => {
    const number = event.target.value;
    this.setState({ number });
  };
  handleChangeInputPages = async (event) => {
    const pages = event.target.value;
    this.setState({ pages });
  };
  handleChangeInputMonth = async (event) => {
    const month = event.target.value;
    this.setState({ month });
  };


  handleChange = async (event) => {
    const sourcetype = event.target.value;
    this.setState({ sourcetype});
  }


  handleIncludeArticle = async () => {
    const {
      article,
      author,
      title,
      journal,
      year,
      volume,
      number,
      pages,
      month,
      sourcetype,
      credibilityrating,
      confidencerating,
      requestion,
      metric,
      researchparticipants,
      researchmethod,
      outcome,
      semethodologies,
      semethod,
      statustype,
    } = this.state;

    const payload = {
      article,
      author,
      title,
      journal,
      year,
      volume,
      number,
      pages,
      month,
      sourcetype,
      credibilityrating,
      confidencerating,
      requestion,
      metric,
      researchparticipants,
      researchmethod,
      outcome,
      semethodologies,
      semethod,
      statustype,
    };

    await api.insertArticle(payload).then((res) => {
      window.alert(`Article inserted successfully`);
      this.setState({
        article: "",
        author: "",
        title: "",
        journal: "",
        year: "",
        volume: "",
        number: "",
        pages: "",
        month: "",
        sourcetype: "",
        credibilityrating: "",
        confidencerating: "",
        requestion: "",
        metric: "",
        researchparticipants: "",
        researchmethod: "",
        outcome: "",
        semethodologies: "",
        semethod: "",
        statustype: "",
      });
    });
  };
  

  
  





  render() {
      
    const {
      article,
      author,
      title,
      journal,
      year,
      volume,
      number,
      pages,
      month,
      sourcetype,
      credibilityrating,
      confidencerating,
      requestion,
      metric,
      researchparticipants,
      researchmethod,
      outcome,
      semethodologies,
      semethod,
      statustype,
      
    } = this.state;

    return (
      <Wrapper>
        <Title>Create Article</Title>

        <Label>Article: </Label>
        <InputText
          type="text"
          value={article}
          onChange={this.handleChangeInputArticle}
        />
        <Label>Author: </Label>
        <InputText
          type="text"
          value={author}
          onChange={this.handleChangeInputAuthor}
        />
        <Label>Title: </Label>
        <InputText
          type="text"
          value={title}
          onChange={this.handleChangeInputTitle}
        />
        <Label>Journal: </Label>
        <InputText
          type="text"
          value={journal}
          onChange={this.handleChangeInputJournal}
        />
        <Label>Year: </Label>
        <InputText
          type="text"
          value={year}
          onChange={this.handleChangeInputYear}
        />
        <Label>Volume: </Label>
        <InputText
          type="text"
          value={volume}
          onChange={this.handleChangeInputVolume}
        />
        <Label>Number: </Label>
        <InputText
          type="text"
          value={number}
          onChange={this.handleChangeInputNumber}
        />
        <Label>Pages: </Label>
        <InputText
          type="text"
          value={pages}
          onChange={this.handleChangeInputPages}
        />
        <Label>Month: </Label>
        <InputText
          type="text"
          value={month}
          onChange={this.handleChangeInputMonth}
        />
        <Label>Confidence Rating (1-100): </Label>
        <InputText
          type="text"
          value={confidencerating}
          onChange={this.handleChangeInputConfidenceRating}
        />
        <Label>Credibility Rating (1-100) : </Label>
        <InputText
          type="text"
          value={credibilityrating}
          onChange={this.handleChangeInputCredibilityRating}
        />
        <Label>Source Type: </Label>
          <select value={sourcetype} onChange={this.handleChangeInputSourceType}>
            <option value="article">article</option>
            <option value="book">book</option>
            <option value="booklet">booklet</option>
            <option value="conference">conference</option>
            <option value="inbook">inbook</option>
            <option value="incollection">incollection</option>
            <option value="inproceedings">inproceedings</option>
            <option value="manual">manual</option>
            <option value="masterthesis">masterthesis</option>
            <option value="misc">misc</option>
            <option value="phdthesis">phdthesis</option>
            <option value="proceedings">proceedings</option>
            <option value="techreport">techreport</option>
            <option value="unpublished">unpublished</option>
          </select>
          <Label>Research Participants: </Label>
          <select value={researchparticipants} onChange={this.handleChangeInputResearchParticipants}>
            <option value="undergraduate">Under Graduate</option>
            <option value="postgraduate">Post Graduate</option>
            <option value="practitioners">Practitioners</option>
          </select>
          <Label>Research Methods: </Label>
          <select value={researchmethod} onChange={this.handleChangeInputResearchMethod}>
            <option value="case study">Case study</option>
            <option value="field observation">Field Observation</option>
            <option value="experiment">Experiment</option>
            <option value="interview">Interview</option>
            <option value="survey">Survey</option>
          </select>
          <Label>Research Outcome: </Label>
          <select value={researchOutcomeoptions} onChange={this.handleChangeInputResearchOutcome}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="sometimes">Sometimes</option>

          </select>
          <Label>SE Methodology Type: </Label>
          <select value={sourcetype} onChange={this.handleChangeInputSEMethodologies}>
            <option value="scrum">Scrum</option>
            <option value="waterfall">Waterfall</option>
            <option value="spiral">Spiral</option>
            <option value="xp">Xp</option>
            <option value="rational">Rational</option>
            <option value="unified">Unified Proccess</option>
            <option value="crystal">Crystal</option>
            <option value="clean room">Clean Room</option>
            <option value="feature driven development">Feature Driven Development</option>
            <option value="model driven development">Model Driven Development</option>
            <option value="domain driven development">Domain Driven Development</option>
            <option value="formal methods">Formal Methods</option>
            <option value="problem driven development">Problem Driven Development</option>
            <option value="service oriented development">Service Driven Development</option>
            <option value="valuse driven development">Valuse Driven Development</option>
            <option value="product driven development">Product Driven Development</option>
            <option value="agile">Agile</option>
            
          </select>
          <Label>Source Type: </Label>
          <select value={sourcetype} onChange={this.handleChangeInputSourceType}>
            <option value="tdd">TDD</option>
            <option value="bdd">BDD</option>
            <option value="pair programming">Pair Programming</option>
            <option value="planning poker">Planning Poker</option>
            <option value="daily standup">Daily Standup</option>
            <option value="story boards">Story Boards</option>
            <option value="user story mapping">User Story Mapping</option>
            <option value="continous">Continous</option>
            <option value="intergration">Intergrating</option>
            <option value="retrospectives">Retrospective</option>
            <option value="burndown charts">Burndown Charts</option>
            <option value="requirements">Requirements</option>
            <option value="requirements prioritisation">Requirements Prioritisation</option>
            <option value="version control">Version Control</option>
            <option value="code sharing">Code Sharing</option>
          </select>


        <Button onClick={this.handleIncludeArticle}>Add Article</Button>
        <CancelButton href={"/articles/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default ArticlesInsert;
   