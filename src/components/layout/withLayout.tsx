import Layout from './layout'

const withLayout = Page => () => (
    <Layout>
        <Page />
    </Layout>
)

export default withLayout