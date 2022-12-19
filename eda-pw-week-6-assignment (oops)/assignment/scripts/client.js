$( function () {
  console.log( 'in ready' );

  displayCars();

  $( '#addCarButton' ).on( 'click', addNewCar );
} ); // End onReady

let garage = [];
const maxSpaces = 5;
let currentCars = 0;
/*
Do not change newCar for base mode!
HINT: You will need to gather the input values and then call this function, passing in those input values.
*/
function newCar( yearInput, makeInput, modelInput ){
  console.log( 'in newCar:', yearInput, makeInput, modelInput );
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push( newCarObject );
  currentCars ++;
  return true;
} // end newCar
newCar( 1991, 'Plymouth', 'Horizon' );

if ( currentCars <= maxSpaces ) {
  $( '#addCarButton' ).prop( 'disabled', false );
} else {
  $( '#addCarButton' ).prop( 'disabled', true );
}

// ^^^ I think this is the the correct logic but not sure where to put it.

function addNewCar() {
  console.log( 'in addNewCar' );

  const yearVal = Number( $( '#yearInput' ).val() );
  const makeVal = $( '#makeInput' ).val();
  const modelVal = $( '#modelInput' ).val();

  console.log( `Year: ${ yearVal } Make: ${ makeVal } Model: ${ modelVal }` );

  if ( $( '#yearInput' ).val().length > 0 && $( '#makeInput' ).val().length > 0 && $( '#modelInput' ).val().length > 0 ) {
    newCar( yearVal, makeVal, modelVal );
  } else {
    return false;
  };

  // Why is it when my input fields are required this works but says not all fields are entered and 
  // when the input fields are not required it doesn't work at all?

  $( '#yearInput' ).val( '' );
  $( '#makeInput' ).val( '' );
  $( '#modelInput' ).val( '' );

  displayCars();
  return true;
} // End addNewCar


function displayCars() {
  console.log( 'in displayCars' );
  $( '#tableBody' ).empty();

  for ( let i = 0; i < garage.length; i++ ) {
    const element = garage[ i ];

    $( '#tableBody' ).append( `<tr>
      <td>${ element.year }</td>
      <td>${ element.make }</td>
      <td>${ element.model }</td>
    </tr>` )
  }
  console.log( garage );
  return true;
} // End displayCars

