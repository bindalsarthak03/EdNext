import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/students.scss';

function Students() {
    return (
        <div className='studCont' >
        <h1>Our <span>Students</span></h1>
        <CardGroup style={{borderRadius:'0px',padding:'0px 50px'}} >
            
            <Card style={{border:'none', margin:'0px 10px' }} className='studCard' data-aos="zoom-in" data-aos-duration="700">
                <Card.Img variant="top" 
                src="https://res.cloudinary.com/dnowsn1o5/image/upload/v1671778359/Ednext/Students/apeksha_agarwal_wmhgvp.jpg" />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>Apeksha Agarwal (99.49%) <br />CRL-5801</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ border:'none' ,margin:'0px 10px'}} data-aos="zoom-in" data-aos-duration="700">
                <Card.Img variant="top" src="https://res.cloudinary.com/dnowsn1o5/image/upload/v1671778359/Ednext/Students/Abhay_Kumar_tkbuan.jpg" />
                <Card.Body>
                    <Card.Title  style={{textAlign:'center'}}>Abhay Kumar (99.49%)</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{border:'none', margin:'0px 10px'}} data-aos="zoom-in" data-aos-duration="700">
                <Card.Img variant="top" src="https://res.cloudinary.com/dnowsn1o5/image/upload/v1671778359/Ednext/Students/Himanshu_Kumar_prxdze.jpg" />
                <Card.Body>
                    <Card.Title  style={{textAlign:'center'}}>Himanshu Kumar (99.15%)</Card.Title>
                </Card.Body>
            </Card>
        </CardGroup>
        </div>
    );
}

export default Students;