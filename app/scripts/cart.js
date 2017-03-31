var Cart = function() {
    this.cartItems = [];
};

(function() {
    this._getPositionInArray = function(arr, id) {
        var pos;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                return pos = i;
            }
        }
        return pos = -1;
    };

    this._isIdInArray = function(arr, id) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                return true;
            }
        }
        return false;
    };

    this.addProductCount = function(id, count) {
        pos = this._getPositionInArray(this.cartItems, id);
        if (pos !== -1) {
            this.cartItems[pos].amount += count;
        }
    }

    this.addProduct = function(id, name, amount) {

        var item = {
            id: id,
            name: name,
            amount: amount
        };

        var pos = this._getPositionInArray(this.cartItems, id);

        if (pos !== -1) {
            this.cartItems[pos].amount + amount;
        } else {
            this.cartItems.push(item);
        }
    }

    this.removeProductCount = function(id, count) {
        pos = this._getPositionInArray(this.cartItems, id);
        if (pos !== -1) {
            if (this.cartItems[pos].amount > count) {
                this.cartItems[pos].amount -= count;
            }

            else if (cartItems[pos].amount >= count) {
                this.cartItems.splice(pos, 1);
            }
        }
    }

    this.deleteProduct = function(id) {
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].id === id) {
                this.cartItems.splice(i, 1);
            }
        }
    }
    
}).call(Cart.prototype);