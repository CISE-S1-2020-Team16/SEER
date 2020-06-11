import React, { Component } from "react";
import api from "../api";
import Select from "react-select";

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
const sourceTypeoptions = [
  { value: "article", label: "Article" },
  { value: "book", label: "Book" },
  { value: "booklet", label: "Booklet" },
  { value: "conference", label: "Conference" },
  { value: "inbook", label: "Inbook" },
  { value: "incollection", label: "Incollection" },
  { value: "inprocceedings", label: "Inprocceedings" },
  { value: "manual", label: "Manual" },
  { value: "masterthesis", label: "Master Thesis" },
  { value: "misc", label: "Misc" },
  { value: "phdthesis", label: "PHD Thesis" },
  { value: "proceedings", label: "Proceedings" },
  { value: "techreport", label: "Tech Report" },
  { value: "unpublished", label: "Unpublished" },
];
const researchParicipantoptions = [
  { value: 'undergraduate', label: 'Under-Graduate' },    
  { value: 'postgraduate', label: 'Post-Graduate' },
  { value: 'practitioners', label: 'Practitioners' },
];
const researchMethodoptions = [
    { value: 'case study', label: 'Case Study' },   
    { value: 'field-observation', label: 'Field Observation' },
    { value: 'experiment', label: 'Experiment' },    
    { value: 'interview', label: 'Interview' },
    { value: 'survey', label: 'Survey' },
];

const researchOutcomeoptions = [
    { value: 'yes', label: 'Yes' }, 
    { value: 'no', label: 'No' }, 
    { value: 'sometimes', label: 'Sometimes' }, 
];

const seMethodologiesoptions = [
    { value: 'scrum', label: 'Scrum' }, 
    { value: 'waterfall', label: 'Waterfall' }, 
    { value: 'spiral', label: 'Spiral' }, 
    { value: 'xp', label: 'XP' }, 
    { value: 'rational', label: 'Rational' }, 
    { value: 'unified proccess', label: 'Unified Proccess' }, 
    { value: 'crystal', label: 'Crystal' }, 
    { value: 'clean room', label: 'Clean Room' }, 
    { value: 'feature driven development', label: 'Feature Driven Development' }, 
    { value: 'model driven development', label: 'Model Driven Development' }, 
    { value: 'domain driven development', label: 'Domain Driven Development' }, 
    { value: 'formal methods', label: 'Formal Methods' }, 
    { value: 'problem driven development', label: 'Problem Driven Development' }, 
    { value: 'cloud computing', label: 'Cloud Computing' },  
    { value: 'service oriented development', label: 'Service Oriented Development' }, 
    { value: 'valuse driven development', label: 'Value Driven Development' }, 
    { value: 'product driven development', label: 'Product Driven Development' }, 
    { value: 'agile', label: 'Agile' }, 
];

const seMethodoptions = [
    { value: 'tdd', label: 'TDD' },
    { value: 'bdd', label: 'BDD' },
    { value: 'pair programming', label: 'Pair Programming' },
    { value: 'planning poker', label: 'Planning Poker' },
    { value: 'daily standup', label: 'Daily Standup' },
    { value: 'story boards', label: 'Story Boards' },
    { value: 'user story mapping', label: 'User Story Mapping' },
    { value: 'continous', label: 'Continous' },
    { value: 'intergration', label: 'Intergration' },
    { value: 'retrospectives', label: 'Retrospectives' },
    { value: 'burndown charts', label: 'Burndown Charts' },
    { value: 'requirements', label: 'Requirements' },
    { value: 'requirements prioritisation', label: 'Requirements Prioritisation' },
    { value: 'version control', label: 'Version Control' },
    { value: 'code sharing', label: 'Code Sharing' },
];

const statusTypeoptions = [
    { value: 'to be moderated', label: 'to be moderated' },
    { value: 'accepted', label: 'accepted' },
    { value: 'rejected', label: 'rejected'},
    { value: 'analysis accepted', label: 'analysis accepted'}
];

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
  handleChangeInputSourceType = async (event) => {
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

  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    const sourcetype = selectedOption;
    this.setState(
      { sourcetype },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
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
      selectedOption
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

        <Label>Source Type: </Label>
        <Select
          value={sourcetype}
          onChange={this.handleChange}
          options={sourceTypeoptions}
        />

        <Button onClick={this.handleIncludeArticle}>Add Article</Button>
        <CancelButton href={"/articles/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default ArticlesInsert;
