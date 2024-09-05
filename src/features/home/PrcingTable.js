import React from 'react';
// import PropTypes from 'prop-types';

export default function PrcingTable() {
  return (
    <div class="comparison">

  <table>
    <thead>
      
      <tr>
        <th class="tl"></th>
        <th class="compare-heading">
          Basic
        </th>
        <th class="compare-heading">
          Standard
        </th>
        <th class="compare-heading">
          Premium
        </th>
        
      </tr>
      <tr>
        <th></th>
        <th class="price-info">
          <div class="price-was">Was Kshs. 8,000</div>
          <div class="price-now"><span>Kshs. 5,000</span></div>
          <div><a href="#" class="price-buy">BOOK <span class="hide-mobile">Now</span></a></div>
        </th>
        <th class="price-info">
          <div class="price-was">Was Kshs. 57,000</div>
         <div class="price-now"><span>Kshs. 50,000</span></div>
          <div><a href="#" class="price-buy">BOOK <span class="hide-mobile">Now</span></a></div>
        </th>
        
        <th class="price-info">
          <div class="price-was">Was Kshs. 97,000</div>
          <div class="price-now"><span>Kshs. 90,000</span></div>
          <div><a href="#" class="price-buy">BOOK <span class="hide-mobile">Now</span></a></div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td colspan="3">Footage Quality</td>
      </tr>
      <tr class="compare-row">
        <td>Footage Quality</td>
        <td>4K </td>
        <td>6K</td>
        <td>6K</td>
       
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="3">Number of 360 images</td>
      </tr>
      <tr>
        <td>Number of 360 images</td>
        <td>up to 10</td>
        <td>up to 25</td>
        <td>up to 50</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="3">2D video conversion</td>
      </tr>
      <tr class="compare-row">
        <td>2D video conversion</td>
        <td><span class="tickgreen">✔</span></td>
        <td><span class="tickgreen">✔</span></td>
        <td><span class="tickgreen">✔</span></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="3">Max. 360 videos duration</td>
      </tr>
      <tr>
        <td>360 videos duration</td>
        <td> up to 5 mins</td>
        <td> up to 20 mins</td>
        <td> at least 45 mins</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="3">Live Streaming</td>
      </tr>
      <tr class="compare-row">
        <td>Live Streaming</td>
        <td></td>
        <td></td>
        <td><span class="tickgreen">✔</span></td>
      </tr>
      
      <tr>
        <td>&nbsp;</td>
        <td colspan="3">Facebook 360 upload</td>
      </tr>
      <tr>
        <td>Facebook 360 upload</td>
        <td><span class="tickgreen">✔</span></td>
        <td><span class="tickgreen">✔</span></td>
        <td><span class="tickgreen">✔</span></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="3">YouTube 360 upload</td>
      </tr>
      <tr class="compare-row">
        <td>YouTube 360 upload</td>
        <td><span class="tickgreen">✔</span></td>
        <td><span class="tickgreen">✔</span></td>
        <td><span class="tickgreen">✔</span></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="3">Embed to a website</td>
      </tr>
      <tr>
        <td>Embed to a website</td>
        <td></td>
        <td><span class="tickgreen">✔</span></td>
        <td><span class="tickgreen">✔</span></td>
      </tr>
     
      
      
    </tbody>
  </table>

</div>
  );
};

