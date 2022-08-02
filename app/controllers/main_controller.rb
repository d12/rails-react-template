class MainController < ApplicationController
  def index
    @data = {
      foo: "bar",
      buzz: "beep",
    }
  end
end
