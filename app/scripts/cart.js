var Cart = function() {

    var _isIdInArray = function(arr, id) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                return true;
            }
        }
        return false;
    }

    var _getPositionInArray = function(arr, id) {
        var pos;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                return pos = i;
            }
        }
        return pos = -1;
    }

    return {

        cartItems: cartItems = [],

        addProduct: function(id, name, amount) {

            var item = {
                id: id,
                name: name,
                amount: amount
            };

            var pos = _getPositionInArray(cartItems, id);
            
            if (pos !== -1) {
                cartItems[pos].amount + amount;
            } else {
                cartItems.push(item);
            }

        },

        addProductCount: function(id, count) {
            pos = _getPositionInArray(cartItems, id);
            if (pos !== -1) {
                cartItems[pos].amount += count;
            }
        },

        removeProductCount: function(id, count) {
            pos = _getPositionInArray(cartItems, id);
            if (pos !== -1) {
                if (cartItems[pos].amount > count) {
                    cartItems[pos].amount -= count;
                }

                else if (cartItems[pos].amount >= count) {
                    cartItems.splice(pos, 1);
                }
            }
        },

        deleteProduct: function(id) {
            for (var i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    cartItems.splice(i, 1);
                }
            }
        }
    }
}