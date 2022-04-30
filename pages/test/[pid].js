import Head from 'next/head'
export default function Test( data ){

    const PageItem = data.page;
   // console.log(PageItem);
    
   
    return (
        <div>
        <Head>
            <title>{PageItem.title}</title>
        </Head>
        
            <h1>{PageItem.title}</h1>
            <article dangerouslySetInnerHTML={{__html: PageItem.content}}></article>
            
        </div>
    )

}

export async function getStaticProps(context) {

    const res = await fetch('http://wp.local/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePage($id: ID!, $idType: PageIdType!) {
                    page(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        
                    }
                }
            `,
            variables: {
                id: context.params.pid,
                idType: 'URI'
            }
        })
    })

    const json = await res.json()
//console.log("check",context.params.pid)
    return {
        props: {
            page:  json.data.page, 
        },
    }
}



export async function getStaticPaths() {

    const res = await fetch('http://wp.local/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `query GetPagesEdges {
                pages {
                    nodes {
                      id
                      title
                      date
                      content
                      slug
                    }
                }
            }
        `})
    })
    
    const json = await res.json()
   
    const pages = json.data.pages.nodes;

    const paths = pages.map((page) => ({
        params: { pid: page.slug },
    }))
    //console.log(paths);
    return { paths, fallback: false }

}
