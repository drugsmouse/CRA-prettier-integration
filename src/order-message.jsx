import React from 'react'

import FormattedMessage from './format-message'

const OrderMessage = ({ id, children }) => {
  ;<FormattedMessage id={id} values={{ orderNumber: children }} />
}

getOrderMessage = orderId => (
  <FormattedMessage
    id="ticket-listings.order"
    values={{
      orderNumber: <Link to="#">{orderId}</Link>,
    }}
  />
)
