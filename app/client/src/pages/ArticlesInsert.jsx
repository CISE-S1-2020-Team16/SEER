
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

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
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
        }
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
        const {article, author, title, journal, year, volume, number, pages, month } = this.state
        const payload = {article, author, title, journal, year, volume, number, pages, month }

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
            })
        })
    }

    render() {
        const {article, author, title, journal, year, volume, number, pages, month } = this.state
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

                <Button onClick={this.handleIncludeArticle}>Add Article</Button>
                <CancelButton href={'/articles/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ArticlesInsert