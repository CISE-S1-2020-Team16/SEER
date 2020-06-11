import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`
const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`

const DropDownListContainer = styled("div")``

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`

const options = ["Mangoes", "Apples", "Oranges"];

const InputText = styled.input.attrs({
    className: 'form-control',
})`
padding: 4px 11px;
width: 55vw;
height: 32px;
font-size: 14px;
line-height: 1.5;
color: rgba(0,0,0,.65);
background-color: #fff;
border: 1px solid #d9d9d9;
border-radius: 4px;
outline: none;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ArticlesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            article: '',
            author: '',
            title: '',
            journal:'',
            year: '',
           volume: '',
            number: '',
           pages: '',
            month:'',
            sourcetype: '',
            credibilityrating: '',
            confidencerating : '',
            requestion:'',
            metric:'',
            researchparticipants:'',
            researchmethod:'',
            outcome:'',
            semethodologies:'',
            semethod:'',
            statustype:'',
            

        }
        
    }
    
    handleChangeInputStatusType = async event => {
      const statustype = event.target.value
      this.setState({ statustype })
  }
    handleChangeInputSEMethod = async event => {
      const semethod = event.target.value
      this.setState({ semethod })
  }
    handleChangeInputSEMethodologies = async event => {
      const semethodologies = event.target.value
      this.setState({ semethodologies })
  }
    handleChangeInputResearchOutcome = async event => {
      const outcome = event.target.value
      this.setState({ outcome })
  }
    handleChangeInputResearchMethod = async event => {
      const researchmethod = event.target.value
      this.setState({ researchmethod })
  }
    handleChangeInputResearchParticipants = async event => {
      const researchparticipants = event.target.value
      this.setState({ researchparticipants })
  }
    handleChangeInputMetric = async event => {
      const metric = event.target.value
      this.setState({ metric })
  }
    handleChangeInputResearchQuestion = async event => {
      const requestion = event.target.value
      this.setState({ requestion })
  }
    handleChangeInputSourceType = async event => {
      const sourcetype = event.target.value
      this.setState({ sourcetype })
  }
  handleChangeInputCredibilityRating = async event => {
    const credibilityrating = event.target.value
    this.setState({ credibilityrating })
}
handleChangeInputConfidenceRating = async event => {
  const confidencerating = event.target.value
  this.setState({ confidencerating })
}
    handleChangeInputArticle = async event => {
        const article = event.target.value
        this.setState({ article })
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value
        this.setState({ author })

    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }
    handleChangeInputJournal = async event => {
        const journal = event.target.value
        this.setState({ journal })
    }

    handleChangeInputYear = async event => {
        const year = event.target.value
        this.setState({ year })
       
    }
    handleChangeInputVolume = async event => {
        const volume = event.target.value
        this.setState({ volume })
    }
    handleChangeInputNumber = async event => {
        const number = event.target.value
        this.setState({ number })
    }
    handleChangeInputPages = async event => {
        const pages = event.target.value
        this.setState({ pages })
    }
    handleChangeInputMonth = async event => {
        const month = event.target.value
        this.setState({ month })
    }

    handleIncludeArticle = async () => {
        const {article, author, title, journal, year, volume, number, pages, month, sourcetype, credibilityrating, confidencerating, requestion, metric, researchparticipants, researchmethod, outcome, semethodologies, semethod,statustype } = this.state
        const payload = {article, author, title, journal, year, volume, number, pages, month, sourcetype, credibilityrating, confidencerating, requestion, metric, researchparticipants, researchmethod, outcome, semethodologies, semethod,statustype }

        await api.insertArticle(payload).then(res => {
            window.alert(`Article inserted successfully`)
            this.setState({
              article: '',
              author: '',
              title: '',
              journal:'',
              year: '',
             volume: '',
              number: '',
             pages: '',
              month:'',
              sourcetype: '',
              credibilityrating: '',
              confidencerating : '',
              requestion:'',
              metric:'',
              researchparticipants:'',
              researchmethod:'',
              outcome:'',
              semethodologies:'',
              semethod:'',
              statustype:'',
            })
        })
    }

    render() {
        const {article, author, title, journal, year, volume, number, pages, month, sourcetype, credibilityrating, confidencerating, requestion, metric, researchparticipants, researchmethod, outcome, semethodologies, semethod,statustype} = this.state
        const [isOpen, setIsOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState(null);
      
        const toggling = () => setIsOpen(!isOpen);
      
        const onOptionClicked = value => () => {
          setSelectedOption(value);
          setIsOpen(false);
          console.log(selectedOption);
        };
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
                <select value={sourcetype}>
                <option value="article">Article</option>
                <option value="book">Book</option>
                <option value="booklet">Booklet</option>
                <option value="conference">Conference</option>
                <option value="inbook">In Book</option>
                <option value="incollection">In Collection</option>
                <option value="inproceedings">In Proceedings</option>
                <option value="manual">Manual</option>
                <option value="masterthesis">Master thesis</option>
                <option value="misc">Miscellenious</option>
                <option value="phdthesis">PHD Thesis</option>
                <option value="proceedings">Proceedings</option>
                <option value="techreport">Tech Report</option>
                <option value="unpublished">UnPublished</option>
                onchange = {this.handleChangeInputSourceType}
                </select>


                

                <Button onClick={this.handleIncludeArticle}>Add Article</Button>
                <CancelButton href={'/articles/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ArticlesInsert