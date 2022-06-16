from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from werkzeug.utils import secure_filename

#create a flask app
app = Flask(__name__)
CORS(app)

#create a route for the app
@app.route('/api/main_cars', methods=['GET'])
def home():
    #import json from ../src/database/cars.json and return it
    with open('./database/cars.json') as json_file:
        data = json.load(json_file)
        print("fetched cars from database")
        return jsonify(data)

@app.route('/api/agent_cars', methods=['GET'])
def agent_cars():
    with open('./database/agent_cars.json') as json_file:
        data = json.load(json_file)
        print("fetched agent cars from database")
        return jsonify(data)

@app.route('/api/sellcar', methods=['POST'])
def sellcar():
    #get the data from the request
    file = request.files['image']
    filename = secure_filename(file.filename)
    destination = "../src/images/" + filename
    file.save(destination)
    print("saved image to images folder")
    data = request.form
    print("got data from request")
    #import the data from the request and save it to the database
    with open('./database/cars.json') as json_file:
        cars = json.load(json_file)
        print(len(cars))
        #add to the end of json cars file data from the request
        cars.update({len(cars)+1 : {"marca": data['brand'], "modelo": data['model'], "ano": data['year'], "preco": data['price'], "kms" : data['kms'], "imagem": filename}})
        print("added car to database")
        with open('./database/cars.json', 'w') as outfile:
            json.dump(cars, outfile)
            print("saved database")

    return jsonify({"success": True})

@app.route('/api/profile_cars', methods=['GET'])
def profile_cars():
    with open('./database/profile_cars.json') as json_file:
        data = json.load(json_file)
        print("fetched profile cars from database")
        return jsonify(data)

#start the app
if __name__ == '__main__':
    app.run(debug=True)