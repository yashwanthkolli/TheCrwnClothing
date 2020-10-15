import React from 'react';

import { HomePageContainer } from './HomePage.Styles'

import Directory from '../../Components/Directory/Directory'

const HomePage = () => (
    <HomePageContainer>
        <Directory className='directory-menu' />
    </HomePageContainer>
)

export default HomePage