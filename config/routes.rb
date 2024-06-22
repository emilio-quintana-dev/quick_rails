Rails.application.routes.draw do
  root to: 'home#index', as: :home
  get '*path', to: 'home#index'
end
