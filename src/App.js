import React, { Component } from 'react';
import Header from './components/header/Header';
import ErrorBar from './components/errorbar/ErrorBar';
import NavigationBar from './components/navigationbar/NavigationBar';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';

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
