import React, { createContext, useContext, useState, useEffect } from 'react';
const SubscriptionContext = createContext();

export const useSubscriptions = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscriptions must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  // Load subscriptions from localStorage on mount
  useEffect(() => {
    const savedSubscriptions = localStorage.getItem('youtube_subscriptions');
    if (savedSubscriptions) {
      setSubscriptions(JSON.parse(savedSubscriptions));
    }
  }, []);

  // Save subscriptions to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('youtube_subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const subscribeToChannel = (channelData) => {
    const isAlreadySubscribed = subscriptions.some(sub => sub.name === channelData.name);

    if (!isAlreadySubscribed) {
      const newSubscription = {
        id: Date.now(),
        name: channelData.name,
        logo: channelData.logo,
        subscribers: channelData.subscribers,
        subscribedAt: new Date().toISOString()
      };
      setSubscriptions(prev => [...prev, newSubscription]);
      return true; // Successfully subscribed
    }
    return false; // Already subscribed
  };

  const unsubscribeFromChannel = (channelName) => {
    setSubscriptions(prev => prev.filter(sub => sub.name !== channelName));
  };

  const isSubscribed = (channelName) => {
    return subscriptions.some(sub => sub.name === channelName);
  };

  const getSubscriberCount = (channelName) => {
    const subscription = subscriptions.find(sub => sub.name === channelName);
    return subscription ? subscription.subscribers : 0;
  };

  const updateSubscriberCount = (channelName, newCount) => {
    setSubscriptions(prev => prev.map(sub =>
      sub.name === channelName
        ? { ...sub, subscribers: newCount }
        : sub
    ));
  };

  const value = {
    subscriptions,
    subscribeToChannel,
    unsubscribeFromChannel,
    isSubscribed,
    getSubscriberCount,
    updateSubscriberCount
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};