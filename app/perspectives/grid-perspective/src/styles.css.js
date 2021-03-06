/**
 * TagSpaces - universal file and folder organizer
 * Copyright (C) 2017-present TagSpaces UG (haftungsbeschraenkt)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License (version 3) as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @flow
 */
// import AppConfig from '../../../config';

export default (theme) => ({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
    // gridAutoRows: 'minmax(220px,auto)',
    gridGap: '5px 5px',
    backgroundColor: theme.palette.background.default,
    padding: 10,
    marginBottom: 100
  },
  rowContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridGap: '1px 1px',
    backgroundColor: theme.palette.background.default,
    padding: 0,
    paddingRight: 10,
    margin: 0,
    marginBottom: 100
  },
  gridCell: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid transparent',
    margin: 2,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 5
  },
  rowCell: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    borderLeft: '2px solid transparent',
    borderRight: '2px solid transparent',
    borderTop: '1px solid transparent',
    borderBottom: '1px solid ' + theme.palette.divider,
    minHeight: 100,
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 0
  },
  selectedGridCell: {
    border: '2px solid' + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    // boxShadow: '0 0 1pt 1pt ' + theme.palette.primary.light
  },
  selectedRowCell: {
    border: '2px solid' + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light
  },
  gridCellThumb: {
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  gridCellTitle: {
    padding: 5,
    minHeight: 20
  },
  gridCellTags: {
    padding: 0,
    paddingTop: 5,
    zIndex: 100,
    maxHeight: 100,
    overflowY: 'auto',
    overflowX: 'hidden',
    opacity: 0.6
  },
  gridCellDescription: {
    padding: 5,
    margin: 4,
    backgroundColor: theme.palette.background.paper,
    opacity: 0.6,
    borderRadius: 5
  },
  gridFileExtension: {
    flex: 1,
    padding: 5,
    // marginBottom: 5,
    marginRight: 5,
    // marginLeft: 5,
    // borderRadius: 3,
    maxWidth: 45,
    minHeight: 16,
    borderWidth: 1,
    color: 'white',
    // color: theme.palette.getContrastText(),
    textAlign: 'center'
  },
  rowFileExtension: {
    flex: 1,
    padding: 5,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 3,
    maxWidth: 45,
    minHeight: 15,
    borderWidth: 1,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    // color: theme.palette.getContrastText(),
    textAlign: 'center'
  },
  gridSizeDate: {
    flex: 3,
    textAlign: 'right',
    whiteSpace: 'nowrap',
    marginRight: 5,
    paddingTop: 5
  },
  gridDetails: {
    display: 'flex',
    whiteSpace: 'nowrap'
  },
  rowFolder: {
    color: 'white',
    padding: 5,
    marginRight: 5,
    marginTop: 5,
    minHeight: 10,
    height: 20,
    borderRadius: 5
  },
  gridFolder: {
    color: 'white',
    padding: 5,
    // marginLeft: 5,
    marginRight: 5,
    // marginBottom: 5,
    minHeight: 10,
    height: 20
    // borderRadius: 5
  },
  topToolbar: {
    paddingLeft: 5,
    paddingRight: 5,
    minHeight: 40,
    height: 53,
    backgroundColor: theme.palette.background.default,
    borderBottom: '1px solid ' + theme.palette.divider,
    width: '100%'
  }
});
