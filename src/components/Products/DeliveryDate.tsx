const DeliveryDate = () => {
  const currentDate = new Date();
  const daysToAdd = 3;

  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + daysToAdd);

  //   get the day and month name
  const deliveryDateArray = futureDate.toString().split(" ");
  const formatedDeliveryDate = `${deliveryDateArray[0]}, ${deliveryDateArray[1]} ${deliveryDateArray[2]}`;

  return (
    <p className="">
      Delivery <span className="font-semibold">{formatedDeliveryDate}</span>
    </p>
  );
};

export default DeliveryDate;
