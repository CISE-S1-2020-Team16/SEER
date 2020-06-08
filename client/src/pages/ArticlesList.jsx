import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import styled from 'styled-components'

import 'react-table/react-table.css'



const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
    `
class UpdateArticle extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/articles/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteArticle extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the Article ${this.props.id} permanently?`,
            )
        ) {
            api.deleteArticleById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}
class ArticlesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllArticles().then(articles => {
            this.setState({
                articles: articles.data.data,
                isLoading: false,
            })
        })
    }


    render() {
        const { articles, isLoading } = this.state
        console.log('TCL: ArticlesList -> render -> articles', articles)

        const columns = [

            {
                Header: 'Article',
                accessor: 'article',
                filterable: true,
            },
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Author',
                accessor: 'author',
                filterable: true,
            },
            {
                Header: 'Journal',
                accessor: 'journal',
                filterable: true,
            },
            {
                Header: 'Year',
                accessor: 'year',
                filterable: true,
            },
            {
                Header: 'Volume',
                accessor: 'volume',
                filterable: true,
            },
            {
                Header: 'Number',
                accessor: 'number',
                filterable: true,
            },
            {
                Header: 'Pages',
                accessor: 'pages',
                filterable: true,
            },
            {
                Header: 'Month',
                accessor: 'month',
                filterable: true,
            },
            {
                Header: 'Research Outcome',
                accessor: 'research-outcome',
                filterable: true,
            },
            {
                Header: 'Research Method',
                accessor: 'research-method',
                filterable: true,
            },
            {
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteArticle id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateArticle id={props.original._id} />
                        </span>
                    )
                },
            },
            
        ]

        let showTable = true
        if (!articles.length) {
            showTable = false
        }

        return (
            
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={articles}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
            
        )
    }
}

export default ArticlesList
