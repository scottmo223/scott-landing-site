import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  state = {hour: new Date()}
  
  componentDidMount(){
    this.setState({hour: new Date()})
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let greeting = (this.state.hour.toLocaleTimeString('en-US',{hour12: false}) < "12:00:00") ? "Good Morning" : "Good Evening"

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div
                  className="full-width-image-container margin-top-0"
                  style={{
                    background: `no-repeat center/100% url(${this.props.data.headerImage.childImageSharp.fluid.src})`,
                    alignItems: 'start'
                  }}
                >
                  <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                      marginTop: '15px',
                      color: 'white',
                      padding: '0px 1.5rem',
                      position: 'absolute',
                      top: '18%',
                      background: '#00000060',
                      borderRadius: '50px',
                      fontSize: '6vw !important',
                    }}
                  >
                    {greeting}
                  </h2>
                </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Blogs</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    headerImage: file(relativePath: {eq: "topspin.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1900 quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
