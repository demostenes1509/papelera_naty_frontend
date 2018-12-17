import React, { Component } from 'react';
import Header from './Header';
import ErrorBar from './ErrorBar';
import NavigationBar from './NavigationBar';
import Container from './Container';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <main>
            <Header />
            <ErrorBar />
            <NavigationBar />
            <Container />
            <Footer />
        </main>
    );
  }
}

export default App;
