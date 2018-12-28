Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :products do
        get "/", to: "products#index"
      end
    end
  end
end
