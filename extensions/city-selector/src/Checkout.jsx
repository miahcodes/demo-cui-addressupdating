import React, {useState} from 'react';
import {
  Select,
  reactExtension,
  useApplyShippingAddressChange,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.delivery-address.render-after',
  () => <Extension />,
);

function Extension() {
  const applyShippingAddressChange = useApplyShippingAddressChange();
  const AbraProvinces = [
    {"label": "Bangued","value": "Bangued"},
    {"label": "Boliney","value": "Boliney"},
    {"label": "Bucay","value": "Bucay"},
    {"label": "Bucloc","value": "Bucloc"},
    {"label": "Daguioman","value": "Daguioman"},
    {"label": "Danglas","value": "Danglas"},
    {"label": "Dolores","value": "Dolores"},
    {"label": "La Paz","value": "La Paz"},
    {"label": "Lacub","value": "Lacub"},
    {"label": "Lagangilang","value": "Lagangilang"},
    {"label": "Lagayan","value": "Lagayan"},
    {"label": "Langiden","value": "Langiden"},
    {"label": "Licuan-Baay","value": "Licuan-Baay"},
    {"label": "Luba","value": "Luba"},
    {"label": "Malibcong","value": "Malibcong"},
    {"label": "Manabo","value": "Manabo"},
    {"label": "Peñarrubia","value": "Peñarrubia"},
    {"label": "Pidigan","value": "Pidigan"},
    {"label": "Pilar","value": "Pilar"},
    {"label": "Sallapadan","value": "Sallapadan"},
    {"label": "San Isidro","value": "San Isidro"},
    {"label": "San Juan","value": "San Juan"},
    {"label": "San Quintin","value": "San Quintin"},
    {"label": "Tayum","value": "Tayum"},
    {"label": "Tineg","value": "Tineg"},
    {"label": "Tubo","value": "Tubo"},
    {"label": "Villaviciosa","value": "Villaviciosa"}
  ]
  const BanguedBarangays = [
    {"label": "Agtangao","value": "Agtangao"},
    {"label": "Angad","value": "Angad"},
    {"label": "Bañacao","value": "Bañacao"},
    {"label": "Bangbangar","value": "Bangbangar"},
    {"label": "Cabuloan","value": "Cabuloan"},
    {"label": "Calaba","value": "Calaba"},
    {"label": "Calot/Tablac","value": "Calot/Tablac"},
    {"label": "Cosili West","value": "Cosili West"},
    {"label": "Cosili East","value": "Cosili East"},
    {"label": "Dangdangla","value": "Dangdangla"},
    {"label": "Lingtan","value": "Lingtan"},
    {"label": "Lipcan","value": "Lipcan"},
    {"label": "Lubong","value": "Lubong"},
    {"label": "Macarcarmay","value": "Macarcarmay"},
    {"label": "Macray","value": "Macray"},
    {"label": "Maoay","value": "Maoay"},
    {"label": "Malita","value": "Malita"},
    {"label": "Palao","value": "Palao"},
    {"label": "Patucannnay","value": "Patucannnay"},
    {"label": "Sagap","value": "Sagap"},
    {"label": "San Antonio","value": "San Antonio"},
    {"label": "Santa Rosa","value": "Santa Rosa"},
    {"label": "Sao-atan","value": "Sao-atan"},
    {"label": "Sappaac","value": "Sappaac"},
    {"label": "Zone 1","value": "Zone 1"},
    {"label": "Zone 2","value": "Zone 2"},
    {"label": "Zone 3","value": "Zone 3"},
    {"label": "Zone 4","value": "Zone 4"},
    {"label": "Zone 5","value": "Zone 5"},
    {"label": "Zone 6","value": "Zone 6"},
    {"label": "Zone 7","value": "Zone 7"}
  ]
  const [city, setCity] = useState('Bangued');
  const [brgy, setBrgy] = useState('Agtangao');
  async function cityChange(value) {
    const result = await applyShippingAddressChange({
      type: 'updateShippingAddress',
      address: {
        city: value
      }
    });
    console.log(result);
  }
  async function brgyChange(value) {
    const result = await applyShippingAddressChange({
      type: 'updateShippingAddress',
      address: {
        address2: value
      }
    });
    console.log(result);
  }
  return (
    <>
      <Select
        label="City"
        value={city}
        onChange={(value)=>{
          cityChange(value);
          setCity(value);
        }}
        options={AbraProvinces}
      />
      <Select
        label="Barangay"
        value={brgy}
        onChange={(value)=>{
          brgyChange(value);
          setBrgy(value);
        }}
        options={BanguedBarangays}
      />
    </>
  );
}
