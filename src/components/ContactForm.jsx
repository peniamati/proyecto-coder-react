import emailjs from 'emailjs-com';

const sendEmail = (buyer, orderRefId, items, total) => {
  const templateParams = {
    user_name: buyer.name,
    user_email: buyer.email,
    order_id: orderRefId,
    items: JSON.stringify(items),
    total: total
  };

  emailjs.send('reactFinal', 'react_template', templateParams, 'ynn2rbfQvTg2GXtgv');
};

export default sendEmail;
