import React, { useState } from 'react'
import  * as dateFns  from 'date-fns'
import './Calendar.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

//<<<<<<<<<<Single Date Modal Logic>>>>>>>>>>>>
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const CalendarF = () => {
    //<<<<<<<<<<<DATE CALENDR LOGIC>>>>>>>>>>>>>>>>>>
    const [month, SetMonth] =useState(new Date())
    const [week, SetWeek] = useState(new Date())

    const renderHeader = () => {
        const dateFormat = 'MMMM yy'
        return (
            <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>{dateFns.format(month, dateFormat)}</span>
            </div>
            <div className="col col-end" onClick={nextMonth}>
              <div className="icon">chevron_right</div>
            </div>
          </div>
        )
    }

    const renderDays = () => {
        const dateFormat = "E";
         const days = [];

         let startDate = dateFns.startOfWeek(month);

         for (let i = 0; i < 7; i++) {
           days.push(
             <div className="col col-center" key={i}>
               {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
             </div>
           );
         }
     
         return <div className="days row">{days}</div>;
    }


   const renderCells= ()=> {
        
        const monthStart = dateFns.startOfMonth(month);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startWeek = dateFns.startOfWeek(monthStart);
        const endMonthRow = dateFns.endOfWeek(monthEnd);
        const selectedFormat = 'd MM YY a..aaa X'  
        const dateFormat = "d";
        const rows = [];
    
        let days = [];
        let day = startWeek;
        let formattedDate = "";
       
        while (day <= endMonthRow) {
          for (let i = 0; i < 7; i++) {
            
         
           const formattedDate = dateFns.format(day, dateFormat);
            days.push(
              <div
                className={`col cell`}
                key={day}
                onClick={() => onDateClick(days), {handleOpen}}
              >

                {/* <span className="number">{formattedDate}</span> */}
                <span className="bg">{formattedDate}</span>
                <Modal aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">
            Event to come
          </p>
        </div>
      </Modal>
              </div>
            );
            day = dateFns.addDays(day, 1);
          }
          rows.push(
            <div className="row" key={day}>
              {days}
            </div>
          );
          days = [];
         
          }
      console.log('days', days)
        
        return <div className="body">{rows}</div>;
      }



    const onDateClick = select => {
        console.log('day', select)
     //find the id of a single date poss set to state
   
    };
  
    const nextMonth = () => {
      SetMonth({ month: dateFns.addMonths(month, 1)
      });
    };
  
    const prevMonth = () => {
      SetMonth({
        month: dateFns.subMonths(month, 1)
      });
    };

    //<<<<<<<MODAL LOGIC>>>>>>>>>>>
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return (
        <div>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    )
}

export default CalendarF
