require 'rails_helper'

describe "Products API" do
  it "sends a collection of products" do
    # Start the tests with a clean database
    Product.destroy_all

    cookie = Product.create(name: "Cookie", description: "Delicious cookie", price: 1.99)
    candy = Product.create(name: "Candy", description: "Delicious candy", price: 1.00)
    bar = Product.create(name: "Bar", description: "Delicious bar", price: 1.99)

    get '/api/v1/products.json'

    expect(response).to be_successful

    products = JSON.parse(response.body)
    expect(products.count).to eq(3)

    product = products.first
    expect(product).to have_key("name")
    expect(product).to have_key("description")
    expect(product).to have_key("price")
    expect(product["name"]).to eq("Cookie")
    expect(product["description"]).to eq("Delicious cookie")
    expect(product["price"]).to eq("1.99")
  end
end
