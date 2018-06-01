Rails.application.routes.draw do
  resources :places
  get 'randomize', to: 'maps#randomize'
  root 'initials#home'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
