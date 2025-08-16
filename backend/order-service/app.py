from flask import Flask, jsonify, request

app = Flask(__name__)

orders = []

@app.route("/orders", methods=["GET"])
def get_orders():
    return jsonify(orders)

@app.route("/orders", methods=["POST"])
def create_order():
    data = request.json
    order = {
        "id": len(orders) + 1,
        "user_id": data["user_id"],
        "product_id": data["product_id"]
    }
    orders.append(order)
    return jsonify(order), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)

