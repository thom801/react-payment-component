import React, { Component } from 'react'
import styles from './PaymentForm.module.sass'

class PaymentForm extends Component {

  expirationYearElements() {
    let currentYear = new Date().getFullYear()
    let years = []
    for(let i=0; i < 15; i++) {
      years.push(currentYear++)
    }

    return years.map((curYear) => <option value={curYear} key={curYear}>{curYear}</option>)
  }

  render() {
    let formRowCellsClassnames = [styles.formRow, styles.formRowCells].join(' ')

    return <div className={styles.PaymentForm}>
      <div className={styles.formRow}>
        <p className={styles.formLabel}>Card Number</p>
        <input type="text" 
            value={this.props.cardNumber} 
            onChange={this.props.onCardNumberChange} />
      </div>

      <div className={styles.formRow}>
        <p className={styles.formLabel}>Cardholder Name</p>
        <input type="text" value={this.props.cardholderName} onChange={this.props.onCardholderNameChange} />
      </div>
      
      <div className={formRowCellsClassnames}>
        <span className={styles.formCell}>
          <p className={styles.formLabel}>Expiration Month</p>
          <select onChange={this.props.onExpirationMonthChange}>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </span>
        
        <span className={styles.formCell}>
          <p className={styles.formLabel}>Expiration Year</p>
          <select onChange={this.props.onExpirationYearChange}>
            {this.expirationYearElements()}
          </select>
        </span>
        
        <span className={styles.formCell}>
          <p className={styles.formLabel}>Security Code</p>
          <input type="password" 
              value={this.props.securityCode} 
              onChange={this.props.onSecurityCodeChange} 
              onFocus={this.props.onSecurityCodeFocus} 
              onBlur={this.props.onSecurityCodeBlur} />
        </span>
      </div>

      <div className={styles.formRow}>
        <div className={styles.purchaseButton}>Purchase</div>
      </div>
    </div>
  }
}

export default PaymentForm