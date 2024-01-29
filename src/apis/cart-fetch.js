export const updateCart = (cart) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(
                // firebase 주소
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        item: cart.item,
                        totalQuantity: cart.totalQuantity,
                    }),
                },
            );
            if (!response.ok) {
                alert('Error occured');
            }
        };
        try {
            await sendRequest();
        } catch (error) {
            console.log(error);
        }
    };
};
