import emailjs from "@emailjs/browser";

export const Email = async (customerEmail, { libraries }) => {
  const order_id = Math.floor(100000 + Math.random() * 900000);
  if (!customerEmail || !libraries || libraries.length === 0) {
    alert('Please select a customer with an email and add products.');
    return;
  }

  const total = libraries.reduce((acc, item) => acc + item.subtotal, 0);

  const templateParams = {
    order_id,
    orders: libraries.map(item => ({
      name: item.title,
      units: item.quantity,
      price: item.subtotal.toFixed(2),
    })),
    cost: { total: total.toFixed(2) },
    email: customerEmail,
    to_email: customerEmail,
  };

  try {
    await emailjs.send(
      'service_2solb3l',
      'template_aaosgaj',
      templateParams,
      'Q58kDaWlI1hQwb-9b'
    );
    alert('Order sent successfully!');
  } catch (error) {
    console.error(error);
    alert('Failed to send order');
  }
};
