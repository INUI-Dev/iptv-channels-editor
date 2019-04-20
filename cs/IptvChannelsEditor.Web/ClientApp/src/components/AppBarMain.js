import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from '@material-ui/icons/Save';
import AppBar from "@material-ui/core/AppBar";
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import Tooltip from "@material-ui/core/Tooltip";

export default class AppBarMain extends React.Component {
  constructor(props){
    super(props);
    
    this.handleSavePlaylist = this.props.onSavePlaylist;
    
  }

  render() {
    const {classes, allChangesSaved} = this.props;
    
    return (
      <AppBar position="fixed">
        <Toolbar>
          <img alt='IPTV' className={classes.appIcon} src={require("../icons/app-icon.svg")}/>
          <Typography variant="h6" color="inherit" className={classes.title}>
            IPTV Редактор плейлистов
          </Typography>
          <Typography variant={'subtitle1'} color="inherit" className={classes.allChangesSavedTitle}>
            {allChangesSaved ? 'Все изменения сохранены' : 'Есть несохраненные изменения'}
          </Typography>
          <Tooltip title={'Отменить'}>
            <IconButton onClick={() => console.log("undo")} size="medium" color='inherit'>
              <UndoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={'Повторить'}>
            <IconButton onClick={() => console.log("redo")} size="small" color='inherit'>
              <RedoIcon />
            </IconButton>
          </Tooltip>
          <Button onClick={() => console.log("load")} variant="contained" size="large" className={classes.largeButton}>
            Загрузить новый
          </Button>
          <Button onClick={this.handleSavePlaylist} variant="contained" size="large" color={"secondary"}
                  disabled={allChangesSaved} className={classes.largeButton}>
            <SaveIcon className={classes.leftIcon} />
            Сохранить
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

AppBarMain.propTypes = {
  classes: PropTypes.object.isRequired,
  allChangesSaved: PropTypes.bool.isRequired,
};