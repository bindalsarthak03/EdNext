import React from 'react'
import '../css/course.scss'
import Table from 'react-bootstrap/Table'
function CourseCont() {
  return (
    <div className='courseCont'>
      <h1>Our <span>Courses</span></h1>
      <div className="classes">

        {/* CLASS 11  */}
        <div className="class11">
          <h2>CLASS XI</h2>
          <Table striped bordered hover responsive={true}>
            <thead>
              <tr>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Mathematics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Mathematics</td>
                <td>Stoichiometry (I)</td>
                <td>Logarithm</td>
              </tr>
              <tr>
                <td>Kinematics</td>
                <td>Atomic Structure</td>
                <td>Quadratic Equation</td>
              </tr>
              <tr>
                <td>NLM</td>
                <td>Gaseous State</td>
                <td>Series and Progression</td>
              </tr>
              <tr>
                <td>Circular Motion</td>
                <td>Thermodynamics</td>
                <td>Binomial</td>
              </tr>
              <tr>
                <td>WPE</td>
                <td>Chemical Equilibrium</td>
                <td>P & C</td>
              </tr>
              <tr>
                <td>COM</td>
                <td>Ionic Equilibrium</td>
                <td>Trigonometric Identities</td>
              </tr>
              <tr>
                <td>Rotation</td>
                <td>Stoichiometry (II)</td>
                <td>Trigonometric Inequations</td>
              </tr>
              <tr>
                <td>Gwavitation</td>
                <td>IUPAC</td>
                <td>Solutions Of Triangle</td>
              </tr>
              <tr>
                <td>SHM</td>
                <td>GOC</td>
                <td>Inverse Trigonometric Functions</td>
              </tr>
              <tr>
                <td>Waves</td>
                <td>Reaction Mechanism</td>
                <td>Functions</td>
              </tr>
              <tr>
                <td>Fluid Mechanics</td>
                <td>Reaction Intermediates</td>
                <td>Straight Lines</td>
              </tr>
              <tr>
                <td>Mechanical Properties of Matter</td>
                <td>Hydrocarbons</td>
                <td>Circle</td>
              </tr>
              <tr>
                <td></td>
                <td>Periodicity</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Chemical Bonding</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>S-Block</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Environmental Chemistry</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Hydrogen</td>
                <td></td>
              </tr>
              
            </tbody>
          </Table>
        </div>
        {/* CLASS 11 END */}

        {/* CLASS 12  */}
        <div className="class11">
          <h2>CLASS XII</h2>
          <Table striped bordered hover responsive={true}>
            <thead>
              <tr>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Mathematics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Electrostatics</td>
                <td>Electrochemistry</td>
                <td>Complex Numbers</td>
              </tr>
              <tr>
                <td>Capacitance</td>
                <td>Chemical Kinetics</td>
                <td>Determinants & Matrices</td>
              </tr>
              <tr>
                <td>Current Electricity</td>
                <td>Nuclear Chemistry</td>
                <td>LCD</td>
              </tr>
              <tr>
                <td>Magnetism</td>
                <td>Solid State</td>
                <td>Method of Differentiation</td>
              </tr>
              <tr>
                <td>EMI</td>
                <td>Solutions</td>
                <td>Indefinite Integration</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>Surface Chemistry</td>
                <td>Definite Integration</td>
              </tr>
              <tr>
                <td>Thermal Expansion</td>
                <td>Halogen Derivatives</td>
                <td>Area Under Curve</td>
              </tr>
              <tr>
                <td>Calorimetry</td>
                <td>Alcohol Phenol Ether</td>
                <td>Parabola</td>
              </tr>
              <tr>
                <td>Heat Transfer</td>
                <td>Carbonyl Compounds</td>
                <td>Ellipse</td>
              </tr>
              <tr>
                <td>Thermodynamics</td>
                <td>Carboxylic Acid & Derivatives</td>
                <td>Hyperbola</td>
              </tr>
              <tr>
                <td>KTG</td>
                <td>Amines</td>
                <td>Vector 3D</td>
              </tr>
              <tr>
                <td>Ray Optics Properties of Matter</td>
                <td>POC</td>
                <td>Probability</td>
              </tr>
              <tr>
                <td>Wave Optics</td>
                <td></td>
                <td>Application of Derivatives</td>
              </tr>
              <tr>
                <td>Atomic Structure</td>
                <td>Polymers</td>
                <td></td>
              </tr>
              <tr>
                <td>Radioactivity</td>
                <td>Chemistry In Everyday Life</td>
                <td></td>
              </tr>
              <tr>
                <td>Photoelectric Effect</td>
                <td>P-Block</td>
                <td></td>
              </tr>
              <tr>
                <td>X-rays</td>
                <td>D-Block</td>
                <td></td>
              </tr>
              <tr>
                <td>EM Waves</td>
                <td>Coordination Compounds</td>
                <td></td>
              </tr>
              <tr>
                <td>Semiconductors</td>
                <td>Metallurgy</td>
                <td></td>
              </tr>
              <tr>
                <td>Communication System</td>
                <td>Salt Analysis</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>F-Block</td>
                <td></td>
              </tr>
              
            </tbody>
          </Table>
        </div>
        {/* CLASS 12 END */}

        {/* Dropper  */}
        <div className="class11">
          <h2>Repeater</h2>
          <Table striped bordered hover responsive={true}>
            <thead>
              <tr>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Mathematics</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Basic Mathematics</td>
                <td>Stoichiometry (I)</td>
                <td>Logarithm</td>
              </tr>
              <tr>
                <td>Kinematics</td>
                <td>Atomic Structure</td>
                <td>Quadratic Equation</td>
              </tr>
              <tr>
                <td>NLM</td>
                <td>Gaseous State</td>
                <td>Series and Progression</td>
              </tr>
              <tr>
                <td>Circular Motion</td>
                <td>Thermodynamics</td>
                <td>Binomial</td>
              </tr>
              <tr>
                <td>WPE</td>
                <td>Chemical Equilibrium</td>
                <td>P & C</td>
              </tr>
              <tr>
                <td>COM</td>
                <td>Ionic Equilibrium</td>
                <td>Trigonometric Identities</td>
              </tr>
              <tr>
                <td>Rotation</td>
                <td>Stoichiometry (II)</td>
                <td>Trigonometric Inequations</td>
              </tr>
              <tr>
                <td>Gravitation</td>
                <td>IUPAC</td>
                <td>Solutions Of Triangle</td>
              </tr>
              <tr>
                <td>SHM</td>
                <td>GOC</td>
                <td>Inverse Trigonometric Functions</td>
              </tr>
              <tr>
                <td>Waves</td>
                <td>Reaction Mechanism</td>
                <td>Functions</td>
              </tr>
              <tr>
                <td>Fluid Mechanics</td>
                <td>Reaction Intermediates</td>
                <td>Straight Lines</td>
              </tr>
              <tr>
                <td>Mechanical Properties of Matter</td>
                <td>Hydrocarbons</td>
                <td>Circle</td>
              </tr>
              <tr>
                <td></td>
                <td>Periodicity</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Chemical Bonding</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>S-Block</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Environmental Chemistry</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Hydrogen</td>
                <td></td>
              </tr>
              <tr>
                <td>Electrostatics</td>
                <td>Electrochemistry</td>
                <td>Complex Numbers</td>
              </tr>
              <tr>
                <td>Capacitance</td>
                <td>Chemical Kinetics</td>
                <td>Determinants & Matrices</td>
              </tr>
              <tr>
                <td>Current Electricity</td>
                <td>Nuclear Chemistry</td>
                <td>LCD</td>
              </tr>
              <tr>
                <td>Magnetism</td>
                <td>Solid State</td>
                <td>Method of Differentiation</td>
              </tr>
              <tr>
                <td>EMI</td>
                <td>Solutions</td>
                <td>Indefinite Integration</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>Surface Chemistry</td>
                <td>Definite Integration</td>
              </tr>
              <tr>
                <td>Thermal Expansion</td>
                <td>Halogen Derivatives</td>
                <td>Area Under Curve</td>
              </tr>
              <tr>
                <td>Calorimetry</td>
                <td>Alcohol Phenol Ether</td>
                <td>Parabola</td>
              </tr>
              <tr>
                <td>Heat Transfer</td>
                <td>Carbonyl Compounds</td>
                <td>Ellipse</td>
              </tr>
              <tr>
                <td>Thermodynamics</td>
                <td>Carboxylic Acid & Derivatives</td>
                <td>Hyperbola</td>
              </tr>
              <tr>
                <td>KTG</td>
                <td>Amines</td>
                <td>Vector 3D</td>
              </tr>
              <tr>
                <td>Ray Optics</td>
                <td>POC</td>
                <td>Probability</td>
              </tr>
              <tr>
                <td>Wave Optics</td>
                <td></td>
                <td>Application of Derivatives</td>
              </tr>
              <tr>
                <td>Atomic Structure</td>
                <td>Polymers</td>
                <td></td>
              </tr>
              <tr>
                <td>Radioactivity</td>
                <td>Chemistry In Everyday Life</td>
                <td></td>
              </tr>
              <tr>
                <td>Photoelectric Effect</td>
                <td>P-Block</td>
                <td></td>
              </tr>
              <tr>
                <td>X-rays</td>
                <td>D-Block</td>
                <td></td>
              </tr>
              <tr>
                <td>EM Waves</td>
                <td>Coordination Compounds</td>
                <td></td>
              </tr>
              <tr>
                <td>Semiconductors</td>
                <td>Metallurgy</td>
                <td></td>
              </tr>
              <tr>
                <td>Communication System</td>
                <td>Salt Analysis</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>F-Block</td>
                <td></td>
              </tr>
              
            </tbody>
          </Table>
        </div>
        {/* Dropper*/}
      </div>
    </div>
  )
}

export default CourseCont