require 'rails_helper'

RSpec.describe Product, type: :model do
  it "has a name, description, and price" do
    chocolate_cookie = Product.create(
      name: "Chocolate cookie",
      description: "A low-carb cookie made with almond flour and fair-trade cacao. Sweetened with stevia and baked to perfection!",
      price: 1.99
    )

    expect(chocolate_cookie).to be_valid
  end

  it "validates for the presence of each attribute" do
    no_name_product = Product.create(
      description: "A low-carb cookie made with almond flour and fair-trade cacao. Sweetened with stevia and baked to perfection!",
      price: 1.99
    )
    expect(no_name_product).not_to be_valid

    no_description_product = Product.create(
      name: "Chocolate cookie",
      price: 1.99
    )
    expect(no_description_product).not_to be_valid

    no_price_product = Product.create(
      name: "Chocolate cookie",
      description: "A low-carb cookie made with almond flour and fair-trade cacao. Sweetened with stevia and baked to perfection!",
    )
    expect(no_price_product).not_to be_valid
  end
end
