import React from 'react'
import styles from './CardPayment.module.sass'
import CreditCard from "./CreditCard.js"
import PaymentForm from "./PaymentForm.js"

class CardPayment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cardNumber: "",
      cardholderName: "Full Name",
      cardType: "visa",
      expirationMonth: "01",
      expirationYear: new Date().getFullYear() + 2,
      securityCode: "***",
      isCardBackVisible: false
    }
  }

  onCardNumberChange = (event) => {
    let newCardNumber = event.target.value
      .replace(/\D/g,'')
      .substring(0,16)
      .replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'') // Add spaces every 4 characters

    this.setState({
      cardNumber: newCardNumber
    })
  }

  onCardholderNameChange = (event) => {
    this.setState({
      cardholderName: event.target.value.replace(/[^a-zA-Z ]/g, "")
    })
  }

  onSecurityCodeChange = (event) => {
    this.setState({
      securityCode: event.target.value.replace(/\D/g,'').substring(0,4)
    })
  }

  onSecurityCodeFocus = () => {
    this.setState({
      isCardBackVisible: true
    })
  }

  onSecurityCodeBlur = () => {
    this.setState({
      isCardBackVisible: false
    })
  }

  onExpirationMonthChange = (event) => {
    this.setState({
      expirationMonth: event.target.value
    })
  }

  onExpirationYearChange = (event) => {
    this.setState({
      expirationYear: event.target.value
    })
  }

  render() {
    return (
      <div className={styles.CardPayment}>
        <CreditCard 
          cardNumber={this.state.cardNumber} 
          cardholderName={this.state.cardholderName}
          expirationMonth={this.state.expirationMonth}
          expirationYear={this.state.expirationYear}
          securityCode={this.state.securityCode}
          isCardBackVisible={this.state.isCardBackVisible}
        />

        <PaymentForm 
          cardNumber={this.state.cardNumber} 
          securityCode={this.state.securityCode}
          expirationDate={this.state.expirationDate}
          // Event Handlers
          onCardNumberChange={this.onCardNumberChange}
          onCardholderNameChange={this.onCardholderNameChange}
          onSecurityCodeChange={this.onSecurityCodeChange}
          onSecurityCodeFocus={this.onSecurityCodeFocus}
          onSecurityCodeBlur={this.onSecurityCodeBlur}
          onExpirationMonthChange={this.onExpirationMonthChange}
          onExpirationYearChange={this.onExpirationYearChange}
        />
      </div>
    )
  }
}

export default CardPayment