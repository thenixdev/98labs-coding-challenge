import React, { PureComponent } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  TextField,
  OutlinedInput,
  InputAdornment,
  Checkbox,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DialogDesign from "../design/dialog";

const itemsAdded = [
  {
    productURL: "Apple iPad 32GB",
    product: "Apple® - iPad® with Retina® display Wi-Fi - 32GB - White",
    price: 499.00,
  },
  {
    productURL: "16GB A Series Walkman",
    product: "16GB A Series Walkman Video MP3",
    price: 130.00,
  },
];

const shippingMethod = [
  {
    courier: "FedEx",
    deliveryFee: 13.99,
  },
];

const paymentMethod = [
  {
    paymentMethodName: "Credit Card",
    isActive: true,
  },
  {
    paymentMethodName: "Gift Card",
    isActive: false,
  },
  {
    paymentMethodName: "Paypal",
    isActive: false,
  },
];

const CheckoutComponent = () => {
//   const orders = [itemsAdded, shippingMethod];
  const [btnActive, setBtnActive] = React.useState(paymentMethod);
  const [totalPrice, setTotalPrice] = React.useState([]);
  const [choosePaymentMethod, setChoosePaymentMethod] = React.useState(
    "credit card"
  );

  const [userDetails, setUserDetails] = React.useState({
      cardNumber: '',
      cvvCardNumber: '',
      validityMM: '',
      validityYY: '',
      cardHolderName: '',
    //   items: itemsAdded

  });
//   const [placeOrder, setPlaceOrder] = React.useState(orders);

  function buttonActive(payment) {
    if (payment.isActive) {
      return "contained";
    } else {
      return "outlined";
    }
  }
  React.useEffect(() => {
    itemsAdded.map((item) =>
      setTotalPrice((prevState) => [...prevState, item.price])
    );
    shippingMethod.map(ship => 
      setTotalPrice((prevState) => [...prevState, ship.deliveryFee])
    )
    console.log(totalPrice)
    if(userDetails.cardNumber.length===4
      || userDetails.cardNumber.length===9
      || userDetails.cardNumber.length===14){
      setUserDetails({...userDetails, cardNumber: userDetails.cardNumber+' '})
    }
  }, [userDetails]);

 

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({...userDetails, [name]: value})
  };
 

  const handleCVVInput = () => {};
  const CreditCard = () => {
    return (
      <React.Fragment>
        <Grid item xs={8}>
          <Paper elevation={1} className="paper">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={12}>
                <Typography variant="subtitle2">
                  <strong>
                    Card number <span className="required">*</span>
                  </strong>
                </Typography>
                <OutlinedInput
                  className="cardInput"
                  size="small"
                  fullWidth
                  required={true}
                  onChange={(e) => handleUserInput(e)}
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  name="cardNumber"
                  value={userDetails.cardNumber}
                  inputProps={{ maxLength:19 }}                
                  endAdornment={
                    <InputAdornment position="end">
                      <img
                        src="https://image.flaticon.com/icons/png/512/62/62802.png"
                        height="35px"
                        width="35px"
                      />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <Typography variant="subtitle2">
                  <strong>
                    Valid thru (mm/yy) <span className="required">*</span>
                  </strong>
                </Typography>
                <Grid container>
                  <Grid item xs={2}>
                    <OutlinedInput
                      className="cardValidInput"
                      placeholder="mm"
                      required={true}
                      onChange={(e) => handleUserInput(e)}
                      name='validityMM'
                      inputProps={{maxLength:2}}
                    />
                  </Grid>
                  <Grid item xs={12} lg={1}>
                    <Typography align="center" variant="h6">
                      /
                    </Typography>
                  </Grid>
                  <Grid xs={12} lg={2}>
                    <OutlinedInput
                      className="cardValidInput"
                      placeholder="yy"
                      required={true}
                      onChange={(e) => handleUserInput(e)}
                      name='validityYY'
                      inputProps={{maxLength:2}}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Typography variant="subtitle2">
                  <strong>
                    Cardholder's name <span className="required">*</span>
                  </strong>
                </Typography>
                <OutlinedInput
                  className="cardValidInput"
                  fullWidth
                  placeholder="Full Name"
                  onChange={(e) => handleUserInput(e)}
                  required={true}
                  name='cardHolderName'
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="cvc">
            <Typography variant="subtitle2">
              <strong>CVV/CVC</strong>
              <span className="required">*</span>
            </Typography>
            <OutlinedInput
              className="cvvCardInput"
              size="small"
              placeholder="xxx"
              onChange={(e) => handleUserInput(e)}
              required={true}
              name='cvvCardNumber'
              inputProps={{maxLength:3}}
              endAdornment={
                <InputAdornment position="end">
                  <span className="cvcTooltip">
                    <Tooltip
                      title="You can find your CVV Number on the back of your Card."
                      placement="right"
                    >
                      <strong>?</strong>
                    </Tooltip>
                  </span>
                </InputAdornment>
              }
            />
          </div>
        </Grid>
      </React.Fragment>
    );
  };

  const GiftCard = () => {
    return (
      <React.Fragment>
        <Grid item xs={12} lg={2}>
          <Typography>Gift Card</Typography>
        </Grid>
      </React.Fragment>
    );
  };

  const Paypal = () => {
    return (
      <React.Fragment>
        <Grid item xs={12} lg={2}>
          <Typography>Paypal</Typography>
        </Grid>
      </React.Fragment>
    );
  };


  function renderPaymentMethod() {
    if (choosePaymentMethod === "gift card") {
      return <GiftCard />;
    } else if (choosePaymentMethod === "paypal") {
      return <Paypal />;
    } else {
      return <CreditCard />;
    }
  }
  function setActiveBtn(name) {
    btnActive.forEach((btn) => {
      if (String(btn.paymentMethodName).toLowerCase() === name) {
        return (btn.isActive = true);
      } else {
        return (btn.isActive = false);
      }
    });
  }
  const handlePaymentMethod = (methodName) => {
    if (String(methodName).toLocaleLowerCase() === "gift card") {
      setActiveBtn("gift card");
      setChoosePaymentMethod("gift card");
    } else if (String(methodName).toLocaleLowerCase() === "paypal") {
      setActiveBtn("paypal");
      setChoosePaymentMethod("paypal");
    } else {
      setActiveBtn("credit card");
      setChoosePaymentMethod("credit card");
    }
  };

  return (
    <form>
      <Box display="flex" justifyContent="left">
        <Grid container>
          <Grid item xs={12} sm={12} lg={3}/>
          <Grid item xs={5}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={12}>
                <Typography variant="h5">Checkout</Typography>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Typography variant="h6">Products</Typography>
              </Grid>
              {itemsAdded.map((item, index) => (
                <>
                  <Grid item xs={10} key={index}>
                    <div className="products">
                      <Link to={item.productURL}>
                        <Typography>{item.product}</Typography>
                      </Link>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align="right">
                      ${parseFloat(item.price).toFixed(2)}
                    </Typography>
                  </Grid>
                </>
              ))}
              <Grid item xs={12}>
                <Typography variant="h6">Shipping Method</Typography>
              </Grid>
              {shippingMethod.map((shipment, index) => (
                <>
                  <Grid item xs={10} key={index}>
                    <div className="products">
                      <Typography>{shipment.courier}</Typography>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align="right">
                      ${parseFloat(shipment.deliveryFee).toFixed(2)}
                    </Typography>
                  </Grid>
                </>
              ))}
              <Grid item xs={12} lg={12}>
                <Typography variant="h6">Payment Method</Typography>
              </Grid>
              {btnActive.map((payment, index) => (
                <Grid item xs={12} lg={4}  key={index}>
                  <Box display='flex' justifyContent='center'>
                    <Button
                        variant={buttonActive(payment)}
                        color="primary"
                        className="paymentMethodbtn"
                        onClick={() => handlePaymentMethod(payment.paymentMethodName)}
                    >
                        {String(payment.paymentMethodName).toLowerCase()}
                    </Button>
                  </Box>
                </Grid>
              ))}

              {renderPaymentMethod()}
              <Grid item xs={12}>
                <Paper elevation={1}>
                  <div className="termsAndCondition">
                    <Checkbox color="primary" />
                    <Typography variant="inherit">
                      I accept the <DialogDesign title="Terms and Conditions" />
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <button className="orderBtn">
                  Place order ($)
                </button>
              </Grid>
            </Grid>
            <Grid item sm={4} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default CheckoutComponent;
