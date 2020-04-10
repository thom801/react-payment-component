import React, { Component } from 'react'
import styles from './CreditCard.module.sass'

const CARDS = {
  visa: '^4',
  amex: '^(34|37)',
  mastercard: '^5[1-5]',
  discover: '^6011',
  unionpay: '^62'
}

class CreditCard extends Component {
  cardType = () => {
    const number = this.props.cardNumber;
    let re;

    for (const [card, pattern] of Object.entries(CARDS)) {
        re = new RegExp(pattern);
        if (number.match(re) != null) {
          return card;
        }
    }

    return 'visa'
  }

  expirationDateFormatted = () => `${this.props.expirationMonth}/${this.props.expirationYear}`

  formatCardNumber() {
    if (this.props.cardNumber.length === 0) return "0000 0000 0000 1234"
    return this.props.cardNumber
  }

  cardLogoURL() {
    return `/images/components/credit-card/card-logos/${ this.cardType() }.svg`
  }

  cardClassnames() {
    if (this.props.isCardBackVisible) {
      return [styles.card, styles.isFlipped].join(' ')
    } else {
      return [styles.card].join(' ')
    }
  }

  hiddenSecurityCode() {
    return `${this.props.securityCode}`.split("").map((l) => "*").join("")
  }

  render() {
    return <div className={styles.CreditCard}>
      <div className={this.cardClassnames()}>
        <div className={[styles.cardFace, styles.cardFront].join(' ')}>
          <div className={styles.cardTypeContainer}>
            <img src={this.cardLogoURL()} className={styles.cardTypeLogo} alt="Credit card logo" />
          </div>
          
          <div className={styles.cardNumber}>
            { this.formatCardNumber() }
          </div>

          <div className={styles.cardNameAndExpiration}>
            <span className={styles.cardholderName}>
              <label>Cardholder Name</label>
              <p>{ this.props.cardholderName}</p>
            </span>

            <span className={styles.expirationDate}>
              <label>Expire Date</label>
              <p>{ this.expirationDateFormatted() }</p>
            </span>
          </div>
        </div>

        <div className={[styles.cardFace, styles.cardBack].join(' ')}>
          <div className={styles.magneticStrip}></div>
          <div className={styles.securityCodeWrapper}>
            <span className={styles.securityCode}>{this.hiddenSecurityCode()}</span>
          </div>
          <div className={styles.cardTypeContainer}>
            <img src={this.cardLogoURL()} className={styles.cardTypeLogo} alt="Credit card logo" />
          </div>
        </div>
      </div>
    </div>
  }
}

export default CreditCard