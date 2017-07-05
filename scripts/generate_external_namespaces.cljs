(ns klipse.generate-external-namespaces)

(set! (.-XMLHttpRequest js/window) (.-XMLHttpRequest (js/require "xmlhttprequest") ))

(println "DDDDD")
(println (.-XMLHttpRequest js/window))
(println "YYYY")

(require 'clojure.test.check)
(require 're-frame.core)
(require 'reagent.core)



(require 'day8.re-frame.http-fx)
