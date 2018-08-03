import Age from './age';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("space-age").submit(function(event) {
    event.preventDefault();
  });
});
