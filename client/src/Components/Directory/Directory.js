import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../Redux/Directory/DirectorySelector'

import MenuItem from '../MenuItem/MenuItem';

import { DirectoryMenuContainer } from './Directory.Styles'

const Directory = ({sections}) => (
    <DirectoryMenuContainer>
        {sections.map( ({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ) )}
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);