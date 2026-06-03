exports.handler = async (event) => {

    const phone =
    event.Details.ContactData.CustomerEndpoint.Address;

    if(phone === "+919999999999"){
        return {
            customerType: "VIP"
        };
    }

    return {
        customerType: "GENERAL"
    };
};
