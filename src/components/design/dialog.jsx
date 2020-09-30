import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogDesign(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <span className='terms'  onClick={handleClickOpen}>Terms and Conditions</span>      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio elit, dapibus vitae eros non, pulvinar dictum nisl. Duis pretium quam egestas ligula mattis, at dapibus diam hendrerit. Curabitur facilisis suscipit tincidunt. Vestibulum posuere turpis nec est lacinia sodales. Mauris sollicitudin magna leo, at feugiat quam efficitur eget. Vestibulum imperdiet eros eu magna tempor, at semper magna tempor. Nunc ex diam, pretium a sem a, tristique semper felis. Nullam congue libero sit amet volutpat iaculis. Praesent interdum tortor sit amet mollis iaculis. Integer a felis lacus. Suspendisse potenti. Nunc ultricies a nisl sit amet semper. Phasellus auctor ante elementum euismod pulvinar. Morbi accumsan et nunc pharetra sodales. In interdum ac justo quis luctus. Mauris orci felis, faucibus ac lobortis in, rutrum sit amet lacus.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum felis sit amet dolor aliquet condimentum. In blandit porttitor lectus sit amet gravida. Duis sodales, tellus sed lobortis dictum, purus purus commodo lacus, vel ultrices odio nisi eu tellus. Maecenas ac orci sit amet urna hendrerit lacinia. Cras et imperdiet ante. Cras fermentum elit id lacus varius, vel convallis justo tincidunt. Mauris aliquet nisl et suscipit sollicitudin. In magna arcu, venenatis id tristique vitae, auctor pulvinar neque. Vivamus id orci tortor. Quisque enim purus, ultrices nec vehicula vel, porttitor in metus. Duis libero nisl, iaculis ac mattis in, tristique ac nulla.

        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse egestas mauris sed sapien rhoncus ornare. Integer tristique semper enim, nec finibus massa dapibus dapibus. Mauris in tellus mattis, ullamcorper erat sed, fringilla lacus. Etiam imperdiet mi vel ipsum posuere, eu euismod turpis accumsan. Sed maximus gravida aliquet. Proin mollis aliquam enim, eu ultrices lacus pellentesque vitae. Vivamus sit amet sapien ac leo lobortis dictum vel at quam. Sed mollis odio ut nulla cursus vulputate. Ut in porttitor purus. Duis blandit placerat euismod. Nulla et fringilla quam.

        Cras a ultrices nibh. Donec tincidunt at turpis sit amet interdum. Phasellus egestas dui suscipit augue tristique, in egestas velit elementum. Nulla non sagittis urna. Quisque est lectus, bibendum in ex sed, lobortis elementum turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dapibus aliquet efficitur. Nulla congue massa vel rutrum vehicula. Proin at ante id justo cursus condimentum a porttitor purus. Pellentesque fermentum dui in nisl varius sagittis. Nunc pharetra velit magna, et convallis nisi iaculis nec.

        Nulla semper in dolor at vestibulum. Mauris neque ipsum, mattis non eleifend eu, cursus eu ex. Sed elementum tristique neque vel molestie. Donec diam neque, finibus ut diam at, pellentesque tristique nisi. Proin facilisis est et augue semper porta. Integer ac sagittis libero. Nulla porta ipsum et commodo tempor. Curabitur condimentum vulputate tempor. Proin ultricies, tellus non porta rutrum, est purus fermentum magna, a tincidunt sem turpis ut urna. Nulla aliquet dignissim magna hendrerit eleifend.
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            I Understand
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
