import React from 'react'
import {Layout} from 'antd'
import {Route , Switch} from 'react-router-dom'
import Button from '@/modules/Buttons'
import Radio from '@/modules/Radios'
import Card from '@/components/Cards/NormalCard'
import testCount from '@/modules/Count'

const { Content }  = Layout

export default () => {

    

    return (
        <Content>
            <Card>
                <Switch>
                    <Route path={`/atoms/Button`} component={Button}/>
                    <Route path={`/atoms/Radio`} children={Radio}/>
                    <Route path={`/atoms/testCount`} component={testCount}/>
                </Switch>
            </Card>
        </Content>
    )
}
