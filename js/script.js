// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-4/sw.js", {
    scope: "/ICS2O-Assignment-4/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  const TAX = 1.13
  const message = 3.99
  const delivery = 15
  const size = parseFloat(document.getElementById("size").value)
  const flavour = parseFloat(document.getElementById("flavour").value)
  const messageAnswer = document.getElementById("message").value
  const pickUpOrDelivery = document.getElementById("pick-up-or-delivery").value

  const basePriceNoTAX = size + flavour
  const basePrice = basePriceNoTAX * TAX
  const messageOnly = (basePriceNoTAX + message) * TAX
  const deliveryOnly = (basePriceNoTAX + delivery) * TAX
  const messageAndDelivery = (basePriceNoTAX + message + delivery) * TAX

  if (messageAnswer == "yes" && pickUpOrDelivery == "delivery") {
    document.getElementById("total").innerHTML =
      "Your total is: $" + messageAndDelivery.toFixed(2) + " including tax."
  } else if (messageAnswer == "no" && pickUpOrDelivery == "delivery") {
    document.getElementById("total").innerHTML =
      "Your total is: $" + deliveryOnly.toFixed(2) + " including tax."
  } else if (messageAnswer == "yes" && pickUpOrDelivery == "pick") {
    document.getElementById("total").innerHTML =
      "Your total is: $" + messageOnly.toFixed(2) + " including tax."
  } else {
    document.getElementById("total").innerHTML =
      "Your total is: $" + basePrice.toFixed(2) + " including tax."
  }
}
