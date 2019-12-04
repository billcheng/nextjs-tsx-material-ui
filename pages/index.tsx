import withLayout from '../src/components/layout/withLayout'
import { Button } from '@material-ui/core'

const Index = () => {
    return (
        <>
            <div>THIS IS A TEST</div>
            <Button>HELLO</Button>
        </>
    )
}

export default withLayout(Index)