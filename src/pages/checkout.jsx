import React, { PureComponent } from 'react'
import CheckoutComponent from '../components/checkout/checkout'

class CheckoutPage extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <CheckoutComponent />
            </React.Fragment>
        )
    }
}

export default CheckoutPage
