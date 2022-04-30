import Image from 'next/image'
import Head from 'next/head'
export default function Post( data ){

    const post = data.post;
    //console.log("res",post.featuredImage);
    const ifImg = post.featuredImage;
   
    return (
        <div className='mainDiv'>
        <Head>
            <title>{post.title}</title>
        </Head>
        
            <h1>{post.title}</h1>
            
            {(ifImg == null) ? <> </>
            : <Image width="640" height="426" src={post.featuredImage.node.sourceUrl} /> }
            <article dangerouslySetInnerHTML={{__html: post.content}}></article>
        </div>
    )

}

export async function getStaticProps(context) {

    const res = await fetch('http://wp.local/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch('http://wp.local/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}
