Rails.application.routes.draw do
  resources :monsters
  root 'home#index'
  get 'home/fetching' => 'home#fetching', as: :fetching
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
